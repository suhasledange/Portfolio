
const Container = ({children,className})=>{
    return <div className={`w-full px-3 flex flex-col max-w-screen-lg mx-auto dark:bg-[#222C39] overflow-x-hidden ${className || ""}`}>{children}</div>;
}
export default Container;