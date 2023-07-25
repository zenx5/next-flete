import CustomFooter from "@/components/CustomFooter";
import CustomHeader from "@/components/CustomHeader";


export default function Layout({ children }) {

    return <>
        <CustomHeader />
        { children }
        <CustomFooter />
    </>

}