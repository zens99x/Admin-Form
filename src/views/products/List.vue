<template>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h2 class="display-4">Product Management</h2>
        <p><router-link to="/product/create">Add new</router-link></p>
    </div>

    <div class="container">
        <div class="card-deck mb-3">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="index" v-for="(product, index) in products">
                        <th scope="row" align="left">{{ index + 1 }}</th>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.description }}</td>
                        <td>
                            <button class="btn btn-primary">Edit</button> &nbsp;
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductForm",
    data() {
        return {
            products: [],
        };
    },
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            this.$request
                .get("http://localhost:8000/api/products")
                .then((res) => {
                    this.products = res.data;
                });
        },
    },
};
</script>

<style></style>
