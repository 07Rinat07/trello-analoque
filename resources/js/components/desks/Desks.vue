<template>
    <div class="container">
        <h1>Доски</h1>
        <div class="row">
            <div class="col-lg-4" v-for="desk in desks">
                <div class="card mt-3">
                    <a href="#" class="card-body">
                        <h5 class="card-title">{{desk.name}}</h5>
                    </a>
                </div>
            </div>
            <div class="alert alert-danger" role="alert" v-if="errored">
                Oшибка загрузки данных!
            </div>
            <div class="spinner-border" style="width: 4rem; height: 4rem;" role="status" v-if="loading">
                <span class="sr-only">Loading..</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            desks: [],
            errored: false,
            loading: true
        }
    },

    mounted() {
        axios.get('/api/v1/desks')
            .then(response => {
               this.desks = response.data.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => {
                this.loading = false
            })
    }
}

</script>

