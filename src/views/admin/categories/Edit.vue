<template>
    <div class="w-screen flex justify-center ">
        <form @submit.prevent="updateCategory" class="w-1/4 mt-12 bg-teal-500 p-2 rounded h-fit">
            <label for="name" class="text-white">Name</label>
            <input type="text" v-model="category.name"  class="w-full rounded px-2">
            <div class="flex justify-center">

                <button class="bg-teal-700 text-white w-full rounded mt-2">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data  () {
            return {
                id : this.$route.params.id,

                category : {},
                updateData : {
                    name : ''
                }
            }
        },
        methods : {
            updateCategory(){
                axios.patch(`http://localhost:8000/api/categories/${this.id}` , this.category)
                    .then((response) => {
                        console.log(response);
                        this.$router.push('/admin/categories')
                    })
                    .catch((response) => {
                        console.log(response);
                    })
            } ,
        },
        mounted(){
               axios.get(`http://localhost:8000/api/categories/${this.id}`)
                    .then((res) => {
                        this.category = res.data.data
                        console.log(this.category);
                    })
            }
    }
</script>

<style>

</style>