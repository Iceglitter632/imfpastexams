<template>
<collapse>
    <collapse-item title="大一" name="1" class="grade">
        <div v-for="(item, index) in freshmen" :key="index" class="subjects" @click="emitCourse(item.course, 1)">
            <p class="courser">{{item.course}}</p>
        </div>
    </collapse-item>
    <collapse-item title="大二" name="2" class="grade">
        <div v-for="(item, index) in sophomore" :key="index" class="subjects" @click="emitCourse(item.course, 2)">
            <p class="courser">{{item.course}}</p>
        </div>
    </collapse-item>
    <collapse-item title="大三" name="3" class="grade">
        <div v-for="(item, index) in junior" :key="index" class="subjects" @click="emitCourse(item.course, 3)">
            <p class="courser">{{item.course}}</p>
        </div>
    </collapse-item>
    <collapse-item title="大四" name="4" class="grade">
        <div v-for="(item, index) in senior" :key="index" class="subjects" @click="emitCourse(item.course, 4)">
            <p class="courser">{{item.course}}</p>
        </div>
    </collapse-item>
    <collapse-item title="其他課程" name="5" class="grade">
        <div v-for="(item, index) in other" :key="index" class="subjects" @click="emitCourse(item.course, 0)">
            <p class="courser">{{item.course}}</p>
        </div>
    </collapse-item>
</collapse>
</template>

<script>
import Collapse from '../components/Collapse/Collapse.vue';
import CollapseItem from "../components/Collapse/CollapseItem.vue";
import CourseService from "@/services/CourseService";

export default{
  components: { CollapseItem, Collapse },
  mounted() {
      this.ShowCourses()
  },
  data() {
      return {
          freshmen: [],
          sophomore: [],
          junior: [],
          senior: [],
          other:[],
        }    
    },
    methods: {
        emitCourse(clickedCourse, grade){
            this.$emit("clickedCourse", [clickedCourse, grade]);
        },
        async ShowCourses(){
            var response = await CourseService.courseforeachgrade(1);
            this.freshmen = response.data;
            response = await CourseService.courseforeachgrade(2);
            this.sophomore = response.data;
            response = await CourseService.courseforeachgrade(3);
            this.junior = response.data;
            response = await CourseService.courseforeachgrade(4);
            this.senior = response.data;
            response = await CourseService.courseforeachgrade(0);
            this.other = response.data;
        }
    }
}
</script>

<style scoped>

.subjects {
    padding: 0.3rem;
    cursor: pointer;
}

.subjects:hover {
    background-color: #d7ddee;
}

.courser{
    margin-left: 15px;
    margin-top: auto;
    margin-bottom: auto;
}

</style>