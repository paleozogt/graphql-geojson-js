const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType } = graphql
const { Feature, FeatureCollection } = require("./geojson.js")
const { dummyFeature, dummyFeatureCollection } = require('./dummydata.js')

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        feature: {
            type: Feature,
            resolve: () => {
                return dummyFeature
            }
        },
        featureCollection: {
            type: FeatureCollection,
            resolve: () => {
                return dummyFeatureCollection
            }
        }
    }
})

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        setFeature: {
            type: Feature,
            args: {
                feature: { type: Feature }
            },
            resolve: function (source, args) {
                return args.feature
            }
        },
        setFeatureCollection: {
            type: FeatureCollection,
            args: {
                featureCollection: { type: FeatureCollection }
            },
            resolve: function (source, args) {
                return args.featureCollection
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
})

module.exports = schema
