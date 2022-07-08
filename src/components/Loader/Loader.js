import React, {useState, useEffect} from 'react';

const Loader = () => {
    const [loaderStatus, setLoaderStatus] = useState(true)

    // useEffect(() => {
    //     setTimeout(setLoaderStatus(false), 8000);
    //   });

      useEffect(() => {
        setTimeout(() => {
            setLoaderStatus(false);
        }, 2000);
      });
    //setTimeout(setLoaderStatus(false), 5000);
    return (<>
        {/* <!-- GLOABAL LOADER --> */}
        {loaderStatus ?
        <div id="global-loader">
            <img src="assets/images/loader.svg" className="loader-img" alt="Loader" />
        </div>
        :""}
        {/* <!-- /GLOABAL LOADER --> */}
    </>
    )
}


export default Loader;