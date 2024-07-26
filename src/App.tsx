import { QueryClientProvider } from "@tanstack/react-query";
import { App, ConfigProvider } from "antd";
import React from "react";

import queryClient from "./config/queryClient.config";
import Routes from "./pages";
import themeConfig from "./theme/config";

const MyApp: React.FC = () => (
  <ConfigProvider theme={themeConfig}>
    <QueryClientProvider client={queryClient}>
      <App>
        <Routes />
      </App>
    </QueryClientProvider>
  </ConfigProvider>
);

export default MyApp;
