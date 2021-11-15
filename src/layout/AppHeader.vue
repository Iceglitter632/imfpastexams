<template>
<div style="position: relative">

<base-nav type="primary" expand>
    <h4 class="brand navbar-brand d-none d-xl-block d-lg-block">資財考古題系統</h4>
    <ul class="navbar-nav ml-lg-auto">
        <!-- <li>
            <a class="nav-link nav-link-icon" href="https://drive.google.com/drive/u/1/folders/1TZ2EDy5gEzPn-UyiYk_94qrWAxUMAdOp">雲端硬碟</a>
        </li>
        <li>
            <a class="nav-link nav-link-icon" href="https://imf.nctu.edu.tw/">資財系官網</a>
        </li> -->
        <li v-if="!this.isAvailable" style="margin-right:100px;">
            <a class="nav-link nav-link-icon"
             href="https://id.nycu.edu.tw/o/authorize/?client_id=pOfDk9OdGmTIa9Ro0uvpNDBJX6tfQda3tNPLpqRy&response_type=code&scope=profile%20name"
            >登入</a>
        </li>
        <li v-else>
            <upload class="nav-link nav-link-icon"></upload>
        </li>
    </ul>
 </base-nav>
</div>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import Upload from "./Upload";

export default{
  props:["isAvailable"],  
  components: {
    BaseNav,
    Upload,
  },
  data(){
      return{
      }
  },
  methods:{
  }

}
</script>

<style>
.upload{
    font-size: 20px;
    color: #5e72e4;
}
.upload h5{
    margin-right: 3%;
    color: #4d64eb;
}
.header-row {
    padding-top: 2%;
}
.brand{
    margin-top: 0.5rem;
    cursor:default;
}
.brand:hover{
    /* 用來表示沒有改變的，因為brand按了也不會怎麼樣 */
    color: white;
}
</style>
