<template>
    <div class="w-screen flex justify-center ">
        <form @submit.prevent="updateUnit" class="w-1/4 mt-12 bg-teal-500 p-2 rounded h-fit">
            <label for="name" class="text-white">Name</label>
            <input type="text" v-model="unit.name"  class="w-full rounded px-2">
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

                unit : {},
                updateData : {
                    name : ''
                }
            }
        },
        methods : {
            updateUnit(){
                axios.patch(`http://localhost:8000/api/units/${this.id}` , this.unit)
                    .then((response) => {
                        console.log(response);
                        this.$router.push('/admin/units')
                    })
                    .catch((response) => {
                        console.log(response);
                    })
            } ,
        },
        mounted(){
               axios.get(`http://localhost:8000/api/units/${this.id}`)
                    .then((res) => {
                        this.unit = res.data.data
                        console.log(this.unit);
                    })
            }
    }
</script>

<style>

</style>