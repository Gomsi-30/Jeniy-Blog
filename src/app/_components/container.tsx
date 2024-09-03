
type containerProps = {
    children : React.ReactNode
}

const Container = ({children}:containerProps) => {
    return ( 
        <>
           <div className="w-full
               mx-auto
               xl:px-20
               md:px-10
               sm:px-2
               px-5">
              {children}
           </div>
        </>
     );
}
 
export default Container;