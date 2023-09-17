import classNames from 'classnames/bind';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';

// hooks
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { getPost, useCreatePost, useEditPost } from 'hooks';

// styles
import styles from './CreatePost.module.scss';

// utils
import { convertToSlug, getBase64FromUrl } from 'utils/helper';

// assets
import Dots from '../../../svgs/Dots';

// components
import {
  Section,
  Input,
  TextArea,
  Button,
  Switch,
  ImageDropzone,
  Error,
} from 'components';
import CreatableSelect from 'react-select/creatable';

const Editor = dynamic(() => import('components/Editor/Editor'), {
  ssr: false,
});

const cx = classNames.bind(styles);

const CreatePost = () => {
  const { mutate: createPost, isLoading } = useCreatePost();
  const { mutate: editPost, isLoading: isLoading2 } = useEditPost();
  const [isEditMode, setIsEditMode] = useState(false);
  const [coverPreview, setCoverPreview] = useState(null);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      cover: '',
      title: '',
      description: '',
      content: {},
      publish: false,
      tags: [],
      postedBy: '',
      metaDescription: '',
      metaTitle: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate(values) {
      const errors = {};
      if (!values.content?.blocks?.length)
        errors.content = 'Content is required';
      return errors;
    },
    validationSchema: Yup.object({
      cover: Yup.string().required('Cover image is Required'),
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      content: Yup.object().required('Content is required'),
      publish: Yup.boolean(),
      tags: Yup.array(),
      postedBy: Yup.string().required('Posted by is required'),
      metaDescription: Yup.string().required('Meta Description is required'),
      metaTitle: Yup.string().required('Meta Title is required'),
    }),
    onSubmit: (values) => {
      const data = {
        cover_image: values.cover.replace(/^data:image\/\w+;base64,/, ''),
        post_title: values.title,
        description: values.description,
        post_slug: convertToSlug(values.title),
        content: JSON.stringify(values.content),
        tags: values.tags.map((tag) => tag.value).join(','),
        posted_by: values.postedBy,
        published: values.publish,
        seo_content: {
          meta_title: values.metaTitle,
          meta_description: values.metaDescription,
        },
      };

      if (isEditMode) {
        data.blog_id = +router.query.blogId;
        editPost(data, { onSuccess: (res) => toast.success(res) });
      } else {
        createPost(data, { onSuccess: (res) => toast.success(res) });
      }

      formik.resetForm();
    },

    onReset: () => {
      setCoverPreview((prev) => (prev === '' ? null : ''));
    },
  });

  const contentEditor = useRef(null);

  useEffect(() => {
    if (!router.isReady) return;

    const { blogId } = router.query;

    if (blogId && !isEditMode) {
      setIsEditMode(true);

      getPost(blogId)
        .then(async (values) => {
          const {
            cover_image,
            description,
            post_title,
            content,
            posted_by,
            published,
            seo_content,
            tags,
          } = values.blog_content;
          const { meta_title, meta_description } = seo_content;
          const parsedContent = JSON.parse(content);
          const cover = await getBase64FromUrl(cover_image).then((d) => d);
          setCoverPreview(cover_image);
          formik.setValues({
            cover,
            title: post_title,
            description,
            content: parsedContent,
            postedBy: posted_by,
            publish: published,
            tags: tags.split(',').map((v) => ({ label: v, value: v })),
            metaTitle: meta_title,
            metaDescription: meta_description,
          });
          contentEditor.current.isReady.then(() => {
            contentEditor.current.render(parsedContent);
            contentEditor.current
              .save()
              .then((data) =>
                localStorage.setItem(
                  'createPostContentDraft',
                  JSON.stringify(data)
                )
              );
            toast.success('Data loaded and ready to edit');
          });
        })
        .catch((e) => console.log(e));
    }
  }, [router.isReady]);

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'var(--color-gray-light)',
      border: 'none',
      '&:focus': {
        outline: 'none',
      },
      '&:focus-within': {
        outline: 'none',
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: 'rgba(0, 0, 0, 0.4)',
      opacity: 0.5,
    }),
  };

  function handleContentSave() {
    contentEditor.current.saving = true;
    return contentEditor.current
      .save()
      .then((data) => {
        formik.setFieldValue('content', data);
        formik.setFieldTouched('content', true);
        localStorage.setItem('createPostContentDraft', JSON.stringify(data));
        return true;
      })
      .catch((e) => {
        console.log(e);
        return false;
      });
  }

  return (
    <div className={cx('create-post-root')}>
      <Section>
        <h2>{isEditMode ? 'Edit existing post' : 'Create a new post'}</h2>
        <form className={cx('form')} onSubmit={formik.handleSubmit}>
          <div className={cx('left', 'card')}>
            <div className={cx('cover')}>
              <label htmlFor='cover' className={cx('label')}>
                Cover
              </label>
              <ImageDropzone
                setValue={formik.setFieldValue.bind(null, 'cover')}
                preview={coverPreview}
              />
              <Error error={formik.errors.cover} />
            </div>
            <Input
              label='Post Title'
              placeholder='Post Title'
              error={formik.errors.title}
              {...formik.getFieldProps('title')}
            />
            <Input
              label='Post Slug'
              placeholder='Post Slug'
              value={convertToSlug(formik.values.title) || ''}
              inputClass={cx('disabled')}
              disabled
            />
            <TextArea
              label='Description'
              placeholder='Description'
              maxLength={200}
              rows={10}
              error={formik.errors.description}
              value={formik.values.description}
              setValue={formik.setFieldValue.bind(null, 'description')}
            />
          </div>
          <div className={cx('right')}>
            <div className={cx('card')}>
              <div className={cx('publish')}>
                <label htmlFor='publish'>Publish</label>
                <Switch
                  id='publish'
                  value={formik.values.publish}
                  {...formik.getFieldProps('publish')}
                />
              </div>
              <Input
                label='Tags'
                inputEl={CreatableSelect}
                placeholder='Tags'
                value={formik.values.tags}
                onChange={formik.setFieldValue.bind(null, 'tags')}
                isMulti
                error={formik.errors.tags}
                styles={selectStyles}
                id='tags'
                name='tags'
                defaultPadding
              />
              <Input
                label='Posted by'
                placeholder='Posted by'
                error={formik.errors.postedBy}
                {...formik.getFieldProps('postedBy')}
              />
              <Input
                label='Meta Title'
                placeholder='Meta Title'
                error={formik.errors.metaTitle}
                {...formik.getFieldProps('metaTitle')}
              />
              <TextArea
                label='Meta Description'
                placeholder='Meta Description'
                maxLength={200}
                rows={10}
                error={formik.errors.metaDescription}
                value={formik.values.metaDescription}
                setValue={formik.setFieldValue.bind(null, 'metaDescription')}
              />
            </div>
          </div>

          <div className={cx('content')}>
            <label className={cx('label')}>Content</label>
            <Editor editor={contentEditor} handleSave={handleContentSave} />
            <Error error={formik.errors.content} />
          </div>

          <div className={cx('submit-wrapper')}>
            <Button
              label={
                !(isLoading || isLoading2) ? (
                  isEditMode ? (
                    'Edit'
                  ) : (
                    'Post'
                  )
                ) : (
                  <Dots className={cx('loading-dots')} />
                )
              }
              type='submit'
              wrapperClass={cx('submit-btn')}
            />
          </div>
        </form>
      </Section>
    </div>
  );
};

export default CreatePost;
