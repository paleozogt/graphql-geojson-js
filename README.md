# GeoJSON with GraphQL

[GeoJSON](https://geojson.org/) is a really popular format for exchanging GIS data.

[GraphQL](https://graphql.org/) is a really popular protocol for exchanging data.

Can't we get these two together?

It turns out that GraphQL can't represent data the way GeoJSON wants to.  In particular, properties (maps) [can't be easily represented](https://github.com/graphql/graphql-spec/issues/101).  Coordinates are also [problematic](https://medium.com/@brygrill/creating-a-geojson-featurecollection-type-for-graphql-352591451b4a).

Since we can't encode the schema in GraphQL's SDL syntax, we can fallback to using [custom scalars](https://www.apollographql.com/docs/apollo-server/schema/scalars-enums/).  In particular, we push the entire parsing/serialization onto the custom scalar, leaving the resulting SDL very minimal:

```
scalar Feature
scalar FeatureCollection
```

This project takes a cue from [graphql-type-json](https://www.npmjs.com/package/graphql-type-json) and adds GeoJSON support via [geojson-validation](https://www.npmjs.com/package/geojson-validation) 

To see this in action, simply check out this project and:
```
npm install
node server.js
```

Then open your browser to `localhost:8000/graphql` to see the GraphiQL IDE.
