import fs from 'fs';
import path from 'path';
import colors from 'colors';
import inquirer from 'inquirer';

async function main() {
  const { componentName, language } = await inquirer.prompt([
    {
      message: 'Component Name',
      type: 'input',
      name: 'componentName',
      validate: (value) => {
        const pass = value.match(/\w+/i);
        if (pass) return true;
        if (!value?.length) return 'Please type the component name';
        return 'Please provide component name with letters only';
      },
    },
    {
      message: 'Choose Language to use',
      type: 'list',
      name: 'language',
      choices: ['Javascript', 'Typescript'],
    },
  ]);

  const fileExtension = {
    Javascript: 'jsx',
    Typescript: 'tsx',
  }[language];

  const componentsDir = process.argv[2] || process.cwd() + '/components';

  const componentFileName = `${componentsDir}/${componentName}/${componentName}.${fileExtension}`;

  const className = `${pascalToKebab(componentName)}-root`;

  ensureDirectoryExistence(componentFileName);

  const componentContent = `import classNames from "classnames/bind"
  
// styles
import styles from "./${componentName}.module.scss";

const cx = classNames.bind(styles);

const ${componentName} = () => {
    return (
        <div className={cx("${className}")}>
          ${componentName}
        </div>
    )
}

export default ${componentName};
`;

  fs.writeFile(componentFileName, componentContent, null, () =>
    writeCallback(`${componentName}.${fileExtension}`)
  );

  const stylesFileName = `${componentsDir}/${componentName}/${componentName}.module.scss`;

  const stylesContent = `.${className} {

}
  `;

  fs.writeFile(stylesFileName, stylesContent, null, () =>
    writeCallback(`${componentName}.module.scss`)
  );

  const componentsIndexFile = `${componentsDir}/index.js`;

  fs.writeFile(
    componentsIndexFile,
    `\nexport { default as ${componentName}} from "./${componentName}/${componentName}"`,
    { flag: 'a' },
    () => writeCallback('index.js', true)
  );
}

function writeCallback(filename, updated) {
  console.log(
    `${updated ? 'Updated' : 'Created'}: ${filename} succesfully`.green.bold
  );
}

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function pascalToKebab(str) {
  return str.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()).slice(1);
}

main();
