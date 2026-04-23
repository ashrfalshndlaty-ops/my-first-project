const app = Vue.createApp({
  data() {
    return {
      name: "",
      age: "",
      grade: "",
      students: []
    }
  },
  methods: {
    addStudent() {
      if (this.name && this.age && this.grade) {
        this.students.push({
          name: this.name,
          age: this.age,
          grade: this.grade
        })

        // تفريغ البيانات
        this.name = ""
        this.age = ""
        this.grade = ""
      }
    },
    deleteStudent(index) {
      this.students.splice(index, 1)
    }
  }
})
app.mount("#app")