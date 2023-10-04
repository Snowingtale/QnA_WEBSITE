<template>
    <div>
        <div class="min-w-full min-h-full mt-10 flex flex-col align-middle justify-center">
            <div class="w-4/5 h-min my-10 mx-auto border-gray-200 border-2 shadow-xl rounded-lg bg-white flex flex-col">
                <div class="w-full h-min p-5 border-gray-200 border shadow-xl rounded-lg bg-gray-50 flex flex-row">
                    <h1 class="p-2 mx-auto text-lg">Adaugă formular nou</h1>
                </div>
                <div class="m-12 w-full">
                    <form id="addAForm" @submit.prevent="saveForm()" class="flex flex-col items-center">
                        <input type="text" id="name" v-model="formName" required placeholder="Numele formularului" class="text-2xl outline-none my-5 self-start">
                        <input type="text" v-model="question1" required placeholder="Întrebarea 1" class="outline-none w-52">
                        <div v-for="(field, index) in fields" :key="index" class="flex mt-5 items-center">
                            <div class="flex w-52">
                                <input :type="field.type" v-model="field.value" required :placeholder="'Întrebarea '+questionNr(index)" class="outline-none">
                                <button @click="deleteField(index)" class="ml-2">
                                    <img class="w-3.5" src="../assets/trash-can.svg"/>
                                </button>
                            </div>
                        </div>
                        <button @click="addField" class="self-start flex">
                            <img class="w-3.5 self-center mr-2" src="../assets/plus-circle.svg"/>
                            Adaugă întrebare
                        </button>
                        <button type="submit" class="self-start flex p-2 mt-10 border-gray-200 border-2 shadow-xl rounded-xl bg-violet-800 text-white transform transition-transform duration-300 hover:bg-violet-700">
                            <span>Salvează</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../router/routes';
import { mapActions } from 'vuex';

export default {
    name: 'NewForm',
    data() {
        return {
            formName: null,
            question1: null,
            fields: []
        };
    },
    methods: {
        ...mapActions('forms', ['addForm']),
        addField() {
            this.fields.push({
                type: 'text',
                value: ''
            });
        },
        deleteField(index) {
            let newFields = this.fields.filter((field, i) => index !== i);
            this.fields = newFields
        },
        questionNr(index) {
            return index+2;
        },
        saveForm() {
            let fields = this.fields.map((field) => field.value);
            let newForm = {
                name: this.formName,
                fields: [ this.question1, ...fields ],
            }
            this.addForm(newForm);
            router.push('/');
        },
    }
}
</script>