import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CartDrawer from "@/components/cart/CartDrawer";
import ScrollAnimations from "@/components/ui/ScrollAnimations";
import { CartProvider } from "@/context/CartContext";
const manrope=Manrope({subsets:["latin"],variable:"--font-manrope",display:"swap"});
const playfair=Playfair_Display({subsets:["latin"],variable:"--font-playfair",display:"swap"});
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000";
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"CRAVINS ICE CREAM | ...Crave for more",template:"%s | CRAVINS ICE CREAM"},description:"Ice cream, signature desserts and satisfying meals at CRAVINS ICE CREAM in Yola, Adamawa, Nigeria. ...Crave for more.",applicationName:"CRAVINS ICE CREAM",icons:{icon:"/icons/icon.svg"},keywords:["Cravins Ice Cream","ice cream Yola","Cravings N More","restaurant Yola","dessert lounge Adamawa"],openGraph:{type:"website",locale:"en_NG",siteName:"CRAVINS ICE CREAM",title:"CRAVINS ICE CREAM | ...Crave for more",description:"Ice cream, sweet treats and satisfying meals in Yola, Adamawa, Nigeria.",url:siteUrl},twitter:{card:"summary_large_image",title:"CRAVINS ICE CREAM | ...Crave for more",description:"A little sweetness. A lot of reasons to come back."},robots:{index:true,follow:true}};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#111111",colorScheme:"dark"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${manrope.variable} ${playfair.variable}`}><body className="min-h-screen bg-ink text-cream antialiased"><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-3 focus:text-ink">Skip to main content</a><CartProvider><ScrollAnimations/><Navbar/><main id="main-content">{children}</main><Footer/><WhatsAppButton/><CartDrawer/></CartProvider></body></html>}
