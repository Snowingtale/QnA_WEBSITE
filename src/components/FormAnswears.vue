<template>
    <div class="p-6 pb-11 flex items-center justify-center flex-col gap-6 w-full bg-white border-gray-400 border rounded-lg shadow-xl">
        <button @click="closeAnswears(form)" class="self-end p-2 w-10 hover:bg-red-100 transition duration-300 rounded-full">
            <span class="text-sm font-medium">X</span>
        </button>
        <span class="text-xl font-semibold self-start">Răspunsuri</span>
        <div v-if="localAnswears.length" class="flex flex-col gap-8">
            <div v-for="answear in localAnswears" :key="answear" class="flex flex-col gap-6 border border-gray-400 rounded-lg shadow-lg">
                <span class="items-start text-lg bg-orange-300 p-4 rounded-t-lg">Răspuns #{{ getAnswears.indexOf(answear)+1 }}</span>
                <div v-for="(q, index) in answear.answears" class="flex flex-col gap-4 p-4">
                    <div class="flex flex-col gap-3">
                        <span>{{ form.fields[index] }}</span>
                        <span>{{ q }}</span>
                    </div>
                </div>
            </div>
        </div>
        <span v-else> Nu există niciun răspuns încă </span>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'FormAnswears',
    props: ['form'],
    computed: {
        ...mapGetters('forms', ['getAnswears']),
        localAnswears() {
            return this.getAnswears.filter((answear) => answear.formularId === this.form.id)
        },
    },
    methods: {
        ...mapActions('forms', ['closeAnswears']),
    },
}
</script>