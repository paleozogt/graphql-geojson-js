exports.dummyFeature = {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [
            [125.6, 10.1]
        ]
    },
    properties: {
        name: "Dinagat Islands"
    }
}

exports.dummyFeatureCollection = {
    type: "FeatureCollection",
    features: [
        this.dummyFeature
    ]
}
