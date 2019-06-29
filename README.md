# First Challenge for Angular

## Intro

This is a coding challange we designed to assess your qualifications as a potential Angular developer at Bulbtech. It's important to note that this is by no means a test. We just want to get a sense of how you write code and solve problems.

We'll give you some requirements that must be done and for which you'll be evaluated, but for the most of time you're free to choose a solution method

## Getting started/finished

#### Create new repository

To get started, 
1) create new blank repository, on your personal github account.

2) Clone the repository with the task
```
git clone --bare https://github.com/bulbtech/job-application-task-1
```

3) Push to repository created in step 1.
```
git push --mirror <your-repo-url>
```

Basic cli angular project structure is already provided. You can of course delete everything and start from scratch. 

#### Run

```sh
npm install && npm start
```
or if you use `yarn`
```sh
yarn install && yarn start
```
This will start application on `http://localhost:4200/` with configured proxy rule (proxy.conf.json) for github API, such that all requests to
```
http://localhost:4200/github
```
will be redirected to
```
https://api.github.com
```
for usage in your services.

#### Code
As best you can.
Keep the commit history - don't squash.

#### Let us know when you're done

Send us URL to your repository,

## What are you going to do?

This challange involves working with the **GitHub API** to create a SPA using Angular, that reads specific parts of API and displays the data in an organized way.

> **GitHub API:** [https://developer.github.com/v3](https://developer.github.com/v3)

**NOTE:** all subsequent API calls must be done with _Authorization_ header for example:
```
curl -H "Authorization: token {generated_token}" https://api.github.com/repos/bulbtech/job-application-task-1
```
with the **GitHub Personal access token** which you can generate through your github settings:
```
Settings -> Developers settings -> Personal access tokens -> Generate new token
```
Personal access token must be provided through **angular environment variables**.

Your main goal is to build SPA which will have:

#### Issue List View

Basic list view which will present data from API:
```
https://api.github.com/repos/bulbtech/job-application-task-1/issues
```
in a list which will include fields:
- title
- created_at
- author

Clicking on title will lead to **Issue Timeline View**

#### Issue Timeline View
Recreate as much as you can (visual representation is up to you) the following view from github _issue timeline feature_:

![Issue Timeline](images/issue_timeline.png?raw=true)

API method specified here:

> **Issue timeline API:** [https://developer.github.com/v3/issues/timeline/#list-events-for-an-issue](https://developer.github.com/v3/issues/timeline/#list-events-for-an-issue)

specifically you will use: 
```
curl -H "Accept: application/vnd.github.mockingbird-preview" https://api.github.com/repos/bulbtech/job-application-task-1/issues/{issue_id}/timeline
```


Timeline is a list of events (assigned, commented, labeled ...) with overlapping set of properties.

- For example, each event can be defined as:
   - event_name: **string**
   - component: **Type**
   - properties: **Interface**

- Implement minimun of two _event definitions_, plus default one which will be rendered insted of any not implemented event
- Use dynamic component rendering Angular feature
- Provide a feature for external/additional registration of event definitions by implementing Angular _multi providers feature_ and _Injection tokens_. 
- All 'resources (components, services, ...)' of Issue Timeline View must be contained in specific NgModule. 
This module will have a functionality for excluding events from view at runtime, implemenented through static **forFeature** method. This method will have an optional input `excludeEventsFromView: Array<EventName>` where `EventName` is preferably strongly typed. Provided event name will exclude this event type from the list of events.

You can use this issue as a guidance:
>[https://github.com/bulbtech/job-application-task-1/issues/1](https://github.com/bulbtech/job-application-task-1/issues/1)
#### Additional expectations

- provide a way to navigate between two views through:
   - UI navigation (back to issue list...)
   - updating URL query parameter e.g. issue_id
- If you have time, implement pagination for issue list view https://developer.github.com/v3/guides/traversing-with-pagination/
