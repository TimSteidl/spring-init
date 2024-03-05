# Spring init

run with **npx spring-init@latest** + options

### Options:

create - start the initialisation process
Current options under create: - Class only - Dependency injection - Crud operations

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

At a later stage crud operations should also contain a multipile choice element for which operations should be generated.

An example for post choice:

[ ] Generate all?

[ ] Generate get endpoint?

[ ] Generate post endpoint?

[ ] Generate put endpoint?

[ ] Generate delete endpoint?
