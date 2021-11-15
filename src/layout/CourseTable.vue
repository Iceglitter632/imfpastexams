<template>
<div style="padding-right:10px;">

  <div v-if="!courseClicked" >
      <br>
      <h3 id="initial">請點選左邊課程列表</h3>
  </div>

  <div v-else style="margin: 2rem;">
    <div id="back">
      <span>{{grade}}</span><span> / {{course}}</span>
    </div>
    <div>
      <table style="margin-top: 15px;">
        <thead>
          <tr class="tbl-header">
            <th class="head" style="width:15%;">年度</th>
            <th class="head" style="width:15%;">類別</th>
            <th class="head" style="width:15%;">老師</th>
            <th class="head" style="width:20%;">提供者</th>
            <th class="head" style="width:55%;">檔名</th>
          </tr>
        </thead>
        <tbody class="tbl-content">
          <tr v-for="c in this.courses" 
            v-bind:key="c.id"
            class="test"
            v-on:click="Download(c.id)">
            <td style="width:15;">{{c.year}}</td>
            <td style="width:15%;">{{c.type}}</td>
            <td style="width:15%;">{{c.teacher}}</td>
            <td style="width:20%;">{{c.contributor}}</td>
            <td style="width:55%">{{c.filename}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>

import DownloadService from "../services/DownloadService";
import CourseService from "../services/CourseService";

export default{
  props:['courseClicked', 'gradeClicked'],
  data() {
    return {
      grade: null,
      course: null,
      courses: [],
    }
  },
  methods:{
    Download(courseid){
      // console.log(courseid);
      DownloadService.download(courseid);
    },
    async ShowExamTable(c){
      const response = await CourseService.course(c);
      this.courses = response.data;
    }
  },
  watch: {
    courseClicked: function(){
      this.course = this.courseClicked;
      if(this.gradeClicked==1) this.grade = "大一";
      else if(this.gradeClicked==2) this.grade = "大二";
      else if(this.gradeClicked==3) this.grade = "大三";
      else if(this.gradeClicked==4) this.grade = "大四";
      else this.grade = "其他課程";

      this.ShowExamTable(this.courseClicked);
    }
  }
} 
</script>

<style scoped>
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  border-bottom: solid #5e72e4;
  margin-top: 1em;
 }

 .tbl-header th{
   font-size: 22px;
   text-align: center;
 }

.tbl-content{
  /* overflow-x:auto; */
  margin-top: 10px;
}

.test td{
  text-align: center;
  vertical-align:middle;
  font-size: 18px;
  color:black;
  padding-bottom: 15px;
  padding-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.test:hover {
  background-color: #f4f5f7;
  cursor: pointer;
}

#back{
  font-size: large;
}

#back a{
  color: #5e72e4;
}

#back a:hover{
  cursor: pointer;
  text-decoration: underline;
}

#initial{
  text-align: center;
}

</style>