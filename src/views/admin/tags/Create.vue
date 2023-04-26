<template>
    <div class="w-screen flex justify-center ">
        <form @submit.prevent="createTag" class="w-1/4 mt-12 bg-teal-500 p-2 rounded h-fit">
            <label for="name" class="text-white">Name</label>
            <input type="text" v-model="createData.name" class="w-full rounded px-2">
            <div class="flex justify-center">
                <button class="bg-teal-700 text-white w-full rounded mt-2">create</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data  () {
            return {
                createData : {
                    name : ''
                }
            }
        },
        methods : {
            createTag(){
                axios.post('http://localhost:8000/api/tags' , this.createData)
                    .then((response) => {
                        console.log(response);
                        this.$router.push('/admin/tags')
                    })
                    .catch((response) => {
                        console.log(response);
                    })
            } 
        }
    }
</script>

<style>

</style>