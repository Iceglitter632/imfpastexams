<template>

<div class="row">
    <div class="col-2 exams">
        <past-exams @clickedCourse="getCourseClicked" @courselist="checkCourselist"></past-exams>
    </div>
    <div class="col-10 coursetable">
        <course-table :courseClicked="courseClicked" :gradeClicked="gradeClicked" :courselistEmpty="courselistEmpty"></course-table>
    </div>
</div>
    

</template>

<script>
import PastExams from "../layout/PastExams.vue";
import CourseTable from "../layout/CourseTable.vue";

export default{
  components: { CourseTable , PastExams},

  data() {
      return{
          courseClicked: "",
          gradeClicked: "",
          courselistEmpty: false
      }
  },
  methods: {
      getCourseClicked(val) {
          this.courseClicked = val[0]; //coursename
          this.gradeClicked =  val[1]; //grade
      },
      checkCourselist(val){
          if(val.length==0) this.courselistEmpty = true;
      }
  }
}

</script>

<style scoped>
.exams {
    box-shadow: 1px 1px 1px 1px #dddddf;
    height: 92vh;
    padding-right: 0;
    overflow-y: auto;
}

.coursetable{
    overflow-y: auto;
}

</style>
