
type containerProps = {
    children : React.ReactNode
}

const Container = ({children}:containerProps) => {
    return ( 
        <>
           <div className="w-full
               mx-auto
               xl:px-40
               lg:px-20
               md:px-10
               px-5
             ">
              {children}
           </div>
        </>
     );
}
 
export default Container;