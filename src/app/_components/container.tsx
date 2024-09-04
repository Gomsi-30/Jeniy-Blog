
type containerProps = {
    children : React.ReactNode
}

const Container = ({children}:containerProps) => {
    return ( 
        <>
           <div className="w-full
               mx-auto
               xl:px-20
               lg:px-20
               md:px-10
               px-10
             ">
              {children}
           </div>
        </>
     );
}
 
export default Container;