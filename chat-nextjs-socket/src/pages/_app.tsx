import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "./components/layouts/AppShell";
import { AuthProvider, useAuth } from "@/helper/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </AuthProvider>
  );
}
