class GiftExchange {
    static pairs(names) {
        if (names.length % 2 != 0) {
            throw new BadRequestError("Must provide an even number of users for pairs matching.")
        }

        const namedPairs = [];

        while (names.length) {
            const currentPair = []

            while (currentPair.length < 2 && names.length > 0) {
                const selectedNameIndex = Math.floor(Math.random() * names.length)
                const selectedName = names[selectedNameIndex]
                names.splice(selectedNameIndex, 1)
                currentPair.push(selectedName)
            }

            namedPairs.push(currentPair)
        }

        return namedPairs;
    }

    static traditional(names) {
        // shuffle the names array
        let currentIdx = names.length - 1

        while (currentIdx > 0) {
            // pick an element
            const randomIdx = Math.floor(Math.random() * currentIdx)
            // swap it with current name
            const temp = names[currentIdx]
            names[currentIdx] = names[randomIdx]
            names[randomIdx] = temp

            currentIdx -= 1
        }

        // create ordered pairings
        const pairings = []

        for (let i = 0; i < names.length; i++) {
            const giver = names[i]
            const receiver = i === names.length - 1 ? names[0] : names[i + 1]
            pairings.push(`${giver} is giving a gift to ${receiver}`)
        }

        return pairings
    }
}

module.exports = GiftExchange;