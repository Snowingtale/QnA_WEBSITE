<template>
    <div class="p-6 pb-11 flex items-center justify-center flex-col gap-6 w-full bg-white border-gray-400 border rounded-lg shadow-xl">
        <span class="text-xl font-semibold self-start">{{ form.name }}</span>
        <form @submit.prevent="submitAnswear()" id="answear-form" class="flex flex-col gap-4 items-center justify-center">
            <div v-for="(question, index) in form.fields" class="self-start flex flex-col">
                <span class="text-lg">{{ question }}</span>
                <input :value="answears[index]" @input="updateAnswer($event, index)"  type="text" required placeholder="Scrie aici răspunsul" class="outline-none border border-gray-400 rounded-lg p-1"/>
            </div>
            <div class="self-end flex gap-6 pt-12">
                <div @click="closeWindow(form)" class="cursor-pointer self-end p-3 rounded-lg bg-gray-400 hover:bg-gray-300 transition duration-300 group">
                    <span class="text-white font-medium group-hover:text-black transition duration-300">Renunță</span>
                </div>
                <button type="submit" class="self-end p-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition duration-300">
                    <span class="text-white font-medium">Trimite răspunsul</span>
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'AnswearForm',
    props: ['form'],
    data() {
        return {
            answears: new Array(this.form.fields.length).fill(''),
        };
    },
    methods: {
        ...mapActions('forms', ['submitNewAnswear', 'closeForm']),
        updateAnswer(event, index) {
            this.answears[index] = event.target.value;
        },
        submitAnswear() {
            let answear = {
                answears: this.answears,
                formularId: this.form.id,
            };
            this.submitNewAnswear(answear);
            this.closeForm(this.form);
            this.resetAnswears();
        },
        closeWindow(form) {
            this.closeForm(form);
            this.resetAnswears();
        },
        resetAnswears() {
            this.answears = new Array(this.form.fields.length).fill('');
        },
    },
};
</script>