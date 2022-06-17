import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization:"Client-ID jof_Cs_utPuTmOI8tlVmPcQ_eohd-_wgPAnsYOlTn3k"
    }
})