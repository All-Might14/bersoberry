<template>
    <div class="w-screen flex justify-center ">
        <form @submit.prevent="updateProduct" class="w-1/4 mt-12 bg-teal-500 p-2 rounded h-fit">
            <label for="name" class="text-white">Name</label>
            <input type="text" v-model="product.name"  class="w-full rounded px-2">
            <label for="price" class="text-white">Price</label>
            <input type="number" v-model="product.price"  class="w-full rounded px-2">
            <label for="discount" class="text-white">Discount</label>
            <input type="number" v-model="product.discount"  class="w-full rounded px-2">
            <label for="stock" class="text-white">Stock</label>
            <input type="number" v-model="product.stock"  class="w-full rounded px-2">
            <label for="brand" class="text-white">Brand</label>
            <input type="text" v-model="product.brand"  class="w-full rounded px-2">
            
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

                product : {},
                updateData : {
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
            updateCategory(){
                axios.patch(`http://localhost:8000/api/products/${this.id}` , this.product)
                    .then((response) => {
                        console.log(response);
                        this.$router.push('/admin/products')
                    })
                    .catch((response) => {
                        console.log(response);
                    })
            } ,
        },
        mounted(){
               axios.get(`http://localhost:8000/api/products/${this.id}`)
                    .then((res) => {
                        this.product = res.data.data
                        console.log(this.product);
                    })
            }
    }
</script>

<style>

</style>