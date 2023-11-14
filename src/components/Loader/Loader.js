import { ColorRing } from "react-loader-spinner";


export const Loader = () => {

    return (<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{
        }}
        wrapperClass="blocks-wrapper"
        colors={['#a74dcd', '#b072ca', '#794f8b', '#b68ac9', '#b034e5']}
    />)

}
