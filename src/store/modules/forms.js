const defaultForm = {
    id: 0,
    name: "Preferințe concediuÎmbunătațirea comunicării dintre management și angajați",
    fields: [
        "Pe o scară de la 1 la 10, cât de satisfăcut ești de comunicarea curentă dintre management și angajați??",
        "Care sunt principalele metode de comunicare folosite între management și angajați în departamentul tău?",
        "Ce aspecte ale comunicării consideri că ar trebui îmbunătățite?",
        "Ai simțit vreodată că lipsa de comunicare sau comunicarea ineficientă a afectat realizarea sarcinilor tale?",
        "Ce metode sau instrumente noi ai sugera pentru îmbunătățirea comunicării dintre management și angajați?",
        "Ai dori sesiuni periodice de feedback cu managementul?"
    ],
    toggled: false,
    answearsVisible: false,
}

const forms = {
    namespaced: true,
    state() {
        return {
            forms: [ defaultForm ],
            answears: [],
        };
    },
    mutations: {
        removeForm(state, formId) {
            let newForms = state.forms.filter(item => item.id !== formId);
            state.forms = newForms;
        },
        addNewForm(state, form) {
            state.forms = [...state.forms, form];
        },
        addAnswear(state, answear) {
            state.answears = [...state.answears, answear];
        },
        closeCurrentForm(state, form) {
            state.forms[form.id].toggled = false;
        },
        closeCurrentAnswears(state, form) {
            state.forms[form.id].answearsVisible = false;
        },
        removeAnswers(state, formId) {
            let newAnswears = state.answears.filter((answear) => answear.formularId !== formId);
            state.answears = newAnswears;
        },
    },
    actions: {
        deleteForm({ commit }, itemId) {
            commit('removeAnswers', itemId);
            commit('removeForm', itemId);
        },
        addForm({ commit, state }, form) {
            let newForm = {
                id: state.forms.length ? state.forms[state.forms.length-1].id + 1 : 0,
                name: form.name,
                fields: form.fields,
                toggled: false,
                answearsVisible: false,
            };
            commit('addNewForm', newForm);
        },
        submitNewAnswear({ commit }, answear) {
            commit('addAnswear', answear);
        },
        closeForm({ commit }, form) {
            commit('closeCurrentForm', form);
        },
        closeAnswears({ commit }, form) {
            commit('closeCurrentAnswears', form);
        },
    },
    getters: {
        getForms(state) {
            return state.forms;
        },
        getAnswears(state) {
            return state.answears;
        },
    }
}

export default forms;