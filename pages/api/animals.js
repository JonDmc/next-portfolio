export default function animals(req, res) {
    const animals = [
        'cat',
        'dog',
        'capybara',
        'ostrich',
        'pangolin',
        'bull',
        'guinea pig',
        'armadillo'
    ]

    // get a random animal
    const rando = animals[Math.floor(Math.random() * animals.length)]
    res.status(200).json({ rando })
}