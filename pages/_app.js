import React from "react";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// style
import "../styles/globals.css";
import "../styles/custom.scss";
import "../styles/blog.scss";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "react-loading-skeleton/dist/skeleton.css";
import "rc-time-picker/assets/index.css";

// context provider
import { UserAuthProvider } from "context/UserAuthContext";
import { AdminAuthProvider } from "context/AdminAuthContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <UserAuthProvider>
          <AdminAuthProvider>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              limit={2}
            />
            {getLayout(<Component {...pageProps} />)}
          </AdminAuthProvider>
        </UserAuthProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default MyApp;
