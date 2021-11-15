import constants from "../constants";

export default{
    download(id){
        window.open(constants.API+"dbrouter/download/"+id)
    }
}