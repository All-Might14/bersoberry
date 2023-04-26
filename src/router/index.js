import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/admin/Dashboard.vue'
import CategoryCreate from '../views/admin/categories/Create.vue'
import CategoryIndex from '../views/admin/categories/Index.vue'
import CategoryEdit from '../views/admin/categories/Edit.vue'
import TagCreate from '../views/admin/tags/Create.vue'
import TagIndex from '../views/admin/tags/Index.vue'
import TagEdit from '../views/admin/tags/Edit.vue'
import UnitCreate from '../views/admin/units/Create.vue'
import UnitIndex from '../views/admin/units/Index.vue'
import UnitEdit from '../views/admin/units/Edit.vue'
import ProductCreate from '../views/admin/products/Create.vue'
import ProductIndex from '../views/admin/products/Index.vue'
import ProductEdit from '../views/admin/products/Edit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/admin',
      name : 'dashboard',
      component : Dashboard,
      children : [
        
        {
          path: 'categories',
          name: 'category',
          component: CategoryIndex
        },
        {
          path: 'categories/create',
          name: 'createCategory',
          component: CategoryCreate
        },
        {
          path: 'categories/:id',
          name: 'editCategory',
          component: CategoryEdit
        },
        {
          path: 'tags',
          name: 'tag',
          component: TagIndex
        },
        {
          path: 'tags/create',
          name: 'createTag',
          component: TagCreate
        },
        {
          path: 'tags/:id',
          name: 'editTag',
          component: TagEdit
        },
        {
          path: 'units',
          name: 'unit',
          component: UnitIndex
        },
        {
          path: 'units/create',
          name: 'createUnit',
          component: UnitCreate
        },
        {
          path: 'units/:id',
          name: 'editUnit',
          component: UnitEdit
        },
        {
          path: 'products',
          name: 'product',
          component: ProductIndex
        },
        {
          path: 'products/create',
          name: 'createProduct',
          component: ProductCreate
        },
        {
          path: 'Products/:id',
          name: 'editProduct',
          component: ProductEdit
        },
        
      ]
    }


  ]
})

export default router
