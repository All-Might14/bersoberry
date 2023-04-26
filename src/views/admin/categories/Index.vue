<template>
  <div>
    <vue-good-table
  :columns="columns"
  :rows="categories"
  :search-options="{
    enabled: true,
    trigger: 'enter'
    
  }">
    <template #table-actions>
      <router-link
            class="px-3 py-1 m-1 text-sm text-white bg-blue-600 rounded hover:text-gray-700"
            :to="{ name: 'createCategory' }"
            >Create
      </router-link>    
    </template>
  <template #table-row="props">
    <span v-if="props.column.field == 'edit'">
      <router-link
            class="px-3 py-1 m-1 text-sm text-white bg-teal-600 rounded hover:text-gray-700"
            :to="{ name: 'editCategory', params: { id: props.row.id } }"
            >Edit
      </router-link>    
    </span>
    <span v-if="props.column.field == 'delete'">
      <button @click="deleteFun(props.row.id)" class="px-3 py-1  text-sm text-white bg-teal-600 rounded hover:text-gray-700">delete</button>    
    </span>
    <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
    
  </template>

</vue-good-table>
      
  </div>
</template>

<script>
  import axios from 'axios'
  import 'vue-good-table-next/dist/vue-good-table-next.css'
  import { VueGoodTable } from 'vue-good-table-next';
  export default {
    components: {
     VueGoodTable,
    },
        data(){
            return {
                categories : [],
                columns : [
                  {
                    label : 'Id',
                    field : 'id'
                  },
                  {
                    label : 'Name',
                    field : 'name'
                  },
                  {
                    label : 'edit',
                    field : 'edit'
                  },
                  {
                    label : 'delete',
                    field : 'delete'
                  }
                ]
            }
        },
        methods:{
          deleteFun(id){
            axios.delete('http://localhost:8000/api/categories/'+ id)
                    .then((response) => {
                        console.log(response);
                        window.location.reload();
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
                    })
            }
        }
  
</script>

<style>

</style>
