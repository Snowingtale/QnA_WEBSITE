<template>
    <div>
        <div class="min-w-full min-h-full mt-10 flex flex-col align-middle justify-center">
            <div class="w-4/5 h-min my-10 mx-auto border-gray-200 border-2 shadow-xl rounded-lg bg-white flex flex-col">
                <div class="w-full h-min p-5 border-gray-200 border shadow-xl rounded-lg bg-gray-50 flex flex-row">
                    <h1 class="p-2 mx-auto text-lg">Formulare</h1>
                    <span class="flex-1"></span>
                    <router-link to="/new-form" class="p-2 mx-auto border-gray-200 border-2 shadow-xl rounded-xl bg-violet-800 text-white transform transition-transform duration-300 hover:bg-violet-700">
                        Adaugă formular
                    </router-link>
                </div>
                <h2 v-if="!getForms.length" class="py-40 mx-auto text-md"> Niciun formular incă </h2>
                <ul class="w-full px-10 my-16" v-else="getForms.length">
                    <li v-for="item in getForms" :key="item.id">
                        <div class="w-full my-5 bg-violet-200 border-gray-900 border shadow-xl rounded-md text-black flex flex-row">
                            <h3 class="text-md p-5">{{ item.name }}</h3>
                            <h3 class="text-sm p-6">{{ nrOfQuestions(item) }} Questions</h3>
                            <div class="flex-1"></div>
                            <div class="flex flex-row">
                                <div @click="answerForm(item)" class="p-5 flex flex-col align-middle justify-center transform transition-transform duration-300 hover:bg-violet-400 hover:cursor-pointer">
                                    <img class="w-5 h-5" src="../assets/enter-page.svg"/>
                                </div>
                                <div @click="goToFormAnswears(item)" class="p-5 flex flex-col align-middle justify-center transform transition-transform duration-300 hover:bg-violet-400 hover:cursor-pointer">
                                    <img class="w-5 h-5" src="../assets/form.svg"/>
                                </div>
                                <div @click="deleteItem(item.id)" class="p-5 flex flex-col align-middle justify-center rounded-r-md transform transition-transform duration-300 hover:bg-red-400 hover:cursor-pointer">
                                    <img class="w-4 h-4" src="../assets/trash-can.svg"/>
                                </div>
                            </div>
                        </div>
                        <div v-show="item.toggled">
                            <answear-form :form="item"></answear-form>
                        </div>
                        <div v-show="item.answearsVisible" class="py-6">
                            <form-answears :form="item"></form-answears>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import AnswearForm from './AnswearForm.vue';
import FormAnswears from './FormAnswears.vue';

export default {
    name: 'Dashboard',
    components: {
        AnswearForm,
        FormAnswears,
    },
    computed: {
        ...mapGetters('forms', ['getForms']),
    },
    methods: {
        ...mapActions('forms', ['deleteForm', 'openAnswears']),
        nrOfQuestions(form) {
            return form.fields.length;
        },
        deleteItem(itemId) {
            this.deleteForm(itemId);
        },
        goToFormAnswears(item) {
            item.answearsVisible = true;
        },
        answerForm(item) {
            item.toggled = true;
        },
    },
}
</script>