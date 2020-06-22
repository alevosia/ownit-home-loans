export const QUESTIONS: Question[] = [
    {
        id: '1',
        type: 'CHOICES',
        inquiry: 'Where are you in your property buying journey?',
        choices: [
            { id: 'A', value: 'I just bought' },
            { id: 'B', value: "I'm ready to make offers" },
            { id: 'C', value: "I'm searching & inspecting" },
            { id: 'D', value: "I'm just browsing" }
        ]
    },
    {
        id: '2',
        type: 'CHOICES',
        inquiry: 'Will you live in the property when you buy it?',
        choices: [
            { id: 'A', value: "Yes, I'll be the owner occupier" },
            { id: 'B', value: "No, I'm buying as an investor" }
        ]
    },
    {
        id: '3',
        type: 'CHOICES',
        inquiry: 'Does the property already exist?',
        choices: [
            { id: 'A', value: "Yes, it's an existing property" },
            { id: 'B', value: "No, it hasn't been built yet" }
        ]
    },
    {
        id: '4',
        type: 'CHOICES',
        inquiry: 'Are you a first home buyer?',
        choices: [
            { id: 'A', value: 'Yes' },
            { id: 'B', value: 'No' }
        ]
    },
    {
        id: '5',
        type: 'CHOICES',
        inquiry: 'How many people will be buying this property?',
        choices: [
            { id: 'A', value: 'Just me' },
            { id: 'B', value: 'Two people' }
        ]
    },
    {
        id: '6',
        type: 'INPUT',
        inquiry: 'How many dependents do you have in total?',
        inputFields: [
            {
                id: 'dependents',
                name: 'Dependents',
                type: 'number',
                incrementBy: 1,
                min: 0
            }
        ]
    },
    {
        id: '7',
        type: 'INPUT',
        inquiry: 'Total funds available for your deposit',
        description:
            'This includes all cash that can be contributed towards this purchase at the time of settlement. ' +
            'This might also include the proceeds of assets that you intend to sell before settlement ' +
            '(e.g. shares, cars, existing property etc).',
        inputFields: [
            {
                id: 'funds',
                name: 'Funds',
                type: 'number',
                incrementBy: 5000,
                min: 0
            }
        ]
    },
    {
        id: '8',
        type: 'CHOICES',
        inquiry: 'What is your salary?',
        choices: [
            { id: 'A', value: 'Weekly' },
            { id: 'B', value: 'Fortnightly' },
            { id: 'C', value: 'Monthly' },
            { id: 'D', value: 'Anually' }
        ]
    },
    {
        id: '9',
        type: 'INPUT',
        inquiry: 'Personal Information',
        inputFields: [
            {
                id: 'name',
                name: 'name',
                placeholder: 'Name',
                type: 'text'
            },
            {
                id: 'email',
                name: 'email',
                placeholder: 'Email Address',
                type: 'email'
            },
            {
                id: 'contact',
                name: 'contact',
                placeholder: 'Contact No.',
                type: 'text'
            }
        ]
    }
]
