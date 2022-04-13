# Nx Angular Micro Frontend Example

This repo showcases an example MFE setup using Nx.  
It consists of four apps:

- Launcher _(host)_
- Todo _(remote)_
- Notes _(remote)_
- Login _(remote)_

The Launcher is a host application and loads the remote applications into it using Module Federation.

The Login application stores state about the user that is then shared between the Launcher and Notes applications. This is done automatically via Nx's `withModuleFederation` helper.

## Usage

To run the example, follow the steps below:

1. Clone the repository
2. Run `npm install`
3. Run `nx serve-mfe static-host`
4. Navigate a browser to `http://localhost:4200`

## More Information

To find out more about Nx's Micro Frontend support, visit https://nx.dev/micro-frontends/setup-mfe-with-angular.
