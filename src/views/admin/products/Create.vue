<template>
    <div class="w-screen flex justify-center ">
        <form @submit.prevent="createProduct" class="w-1/4 mt-12 bg-teal-500 p-2 rounded h-fit">
            <label for="name" class="text-white">Name</label>
            <input type="text" v-model="createData.name" class="w-full rounded px-2">
            <label for="price" class="text-white">Price</label>
            <input type="number" v-model="createData.price" class="w-full rounded px-2">
            <label for="discount" class="text-white">Discount</label>
            <input type="number" v-model="createData.discount" class="w-full rounded px-2">
            <label for="stock" class="text-white">stock</label>
            <input type="number" v-model="createData.stock" class="w-full rounded px-2">
            <label for="brand" class="text-white">Brand</label>
            <input type="text" v-model="createData.brand" class="w-full rounded px-2">
            <label for="category_id" class="text-white">Category</label><br>
                <select v-model="createData.category_id">
                    <option value="">Select a category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select><br>
            <label for="unit_id" class="text-white">Unit</label><br>
                <select v-model="createData.unit_id">
                    <option value="">Select a unit</option>
                    <option v-for="unit in units" :key="unit.id" :value="unit.id">{{ unit.name }}</option>
                </select><br>
            <label for="tag_id" class="text-white">Tag</label><br>
                <select v-model="createData.tag_id">
                    <option value="">Select a tag</option>
                    <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.name }}</option>
                </select>
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
                categories: [],
                // selectedCategoryId: null,
                units: [],
                // selectedUnitId: null,
                tags: [],
                // selectedTagId: null,
                
                createData : {
                    name : '',
                    price: '',
                    discount: '',
                    stock: '',
                    brand: '',
                    category: '',
                    unit: '',
                    tag: ''
                }
            }
        },
        methods : {
            createProduct(){
                axios.post('http://localhost:8000/api/products' , this.createData)
                    .then((response) => {
                        console.log(response);
                        this.$router.push('/admin/products')
                    })
                    .catch((response) => {
                        console.log(response);
                    })
            } 
        },
        mounted(){
               axios.get('http://localhost:8000/api/categories')
                    .then((res) => {
                        console.log(res.data.data);
                        this.categories = res.data.data
                    }),
                    axios.get('http://localhost:8000/api/units')
                      .then((res) => {
                          console.log(res.data.data);
                          this.units = res.data.data
                      }),
                      axios.get('http://localhost:8000/api/tags')
                      .then((res) => {
                          console.log(res.data.data);
                          this.tags = res.data.data
                      })
            }
    }
</script>

<style>

</style>