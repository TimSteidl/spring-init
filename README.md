# Spring init

run with **npx spring-init@latest**

### Targets:

- Automate reocurrances in the initial stage of configuring a spring application
  This encompasses the generation of:
  - Packages
  - Entitys
  - Controllers
  - Services
  - CRUD Operations
  - Jpa Repositories

The common destinguishing difference when first building the project is usually just the name of the entity,
which defines the package name, controller name, service name and repository name.

There should be choices as to how far everything should be generated.
At the time of writing these should be:

- Class only
- Dependency injection
- Crud operations

Each of these can be easily templated and generated without much effort.

Crud operations should also encompass the dependency injection.

At a later stage crud operations should also contain a multipile choice element for which operations should be generated.

An example for post choice:

[ ] Generate all?
[ ] Generate get endpoint?
[ ] Generate post endpoint?
[ ] Generate put endpoint?
[ ] Generate delete endpoint?
