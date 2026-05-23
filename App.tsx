import AppNavigation from "@/navigation/AppNavigation";
import AppProvider from "@/providers/app-provider";
import { FONTS } from "@/styles/fonts";
import "@/styles/global.css";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts(FONTS)

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
}
