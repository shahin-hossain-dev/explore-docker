# Explore Docker

- Docker কি?

  - Docker হলো একটি সফটওয়্যার প্ল্যাটফর্ম, যার মাধ্যমে অ্যাপ্লিকেশন ও তার সমস্ত প্রয়োজনীয়তা (যেমন: কোড, লাইব্রেরি, ডিপেনডেন্সি ইত্যাদি) একসাথে কনটেইনার নামে একটি পোর্টেবল প্যাকেজে সংরক্ষণ করা যায়। এই কনটেইনারটি যেকোনো পরিবেশে (কম্পিউটার, সার্ভার, ক্লাউড) একইভাবে কাজ করে।

- Docker Scalability

  - Docker scalability হলো একটি ক্ষমতা, যার মাধ্যমে Docker কনটেইনার ব্যবহার করে আপনার অ্যাপ্লিকেশনকে প্রয়োজন অনুযায়ী বেশি কনটেইনার চালিয়ে বড় করা বা অপ্রয়োজনীয় কনটেইনার বন্ধ করে ছোট করা যায়।
  - example: ধরা যাক, আমার একটি Node.js অ্যাপ অনেক ইউজার একসাথে ব্যবহার করছে। এখন একটাই কনটেইনার দিয়ে সেই চাপ সামলানো যাচ্ছে না। আমরা চাইলে Docker এর মাধ্যমে সহজেই আরো ৩-৪টা কনটেইনার চালিয়ে সেই চাপ সামলাতে পারি এটাকেই বলে scale করা।

- Docker Image কী?

  - Docker Image হলো একটি রেডি-মেইড টেমপ্লেট বা Blueprint, যেখানে আমাদের অ্যাপ্লিকেশন চালানোর জন্য প্রয়োজনীয় সবকিছু (যেমনঃ কোড, লাইব্রেরি, ডিপেন্ডেন্সি, কনফিগারেশন ইত্যাদি) প্যাক করে রাখা থাকে। এই Image ব্যবহার করেই আমরা Docker কনটেইনার তৈরি করতে পারি।

- Docker Container কী?

  - Docker Container হলো একটি lite-weight & automatic runtime environment, যেখানে আমাদের অ্যাপ্লিকেশন এবং তার সকল ডিপেনডেন্সি একসাথে চলে। এটি মূলত Docker Image থেকে তৈরি হয় এবং বাস্তবে আমাদের অ্যাপ্লিকেশন এখানে চলে। এখানে একই মেশিনে multiple container independenly চলতে পারে। virtual machine যেভাবে চলতে পারে।

- Virtual Machine কী?
  - Virtual Machine (VM) হলো একটি কৃত্রিম বা ভার্চুয়াল কম্পিউটার, যা একটি বাস্তব কম্পিউটারের (host machine) ভেতরেই তৈরি করা হয় এবং চালানো হয়। এটি নিজস্ব অপারেটিং সিস্টেমসহ পুরোপুরি আলাদা একটি কম্পিউটারের মতো কাজ করে। এবং Virtual Machine বা computer মেইন computer এর থেকে প্রয়োজনীয় Resource access করে পরিচালিত হয়।

## How to Install Docker

- Download docker for win/mac/li
- open command line
- docker image pull from docker [hub.](hub.docker.com)

### Docker commands

- docker images install

```
docker pull node
```

- check docker images:

```
docker images
```

- check all docker container

```
docker ps -a
```

- check active docker container

```
docker ps
```

- run docker container (e.g. docker run node-version)

```
docker run node
```

- run docker container interactive mode

```
docker run -it node
```

- docker build

```
docker build app-name
```
