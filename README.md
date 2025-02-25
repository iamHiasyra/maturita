# Aplikace Kalkulačka 
## 1. Technologie
- Github
- ReactJS 18.3.1
- Vite
## 2. Styl

## 3. Komponenty
- Zahlaví
- Displej
- Klávesnice

## 4. Funkce
- addChar()
- delChar()
- operate()
- calc()
- reset()


# Stage 1 / Fumctionality without CSS
# Stage 2 / CSS, Theme and Layout



## Notes need organizing
- Props can be pass only from parent to children. However that create a problem called props drilling, 
which overcomplicate the program. To solve that we use Context, which is public to all components

 In useContext, the context can be use in the sub component not in the component where provider is being listed

# Design System
https://atomicdesign.bradfrost.com/chapter-2/

### Theme
y2k
minimal
neobrutalisz
grainy
modern

skeuomorphic
glassmorphic



### Problem during coding
- Import problem - wrong import, false path
- Context - forget to put it in curly bracket ( object destructuring)
- Name conflict
- Syntax, comma and parenthesis
- Mask during input
- gh :
  - In package.json, add:
    "scripts": {"predeploy": "npm run build","deploy": "gh-pages -d dist",}
    Explanation: In my case, I was using Vite to create my React app. 
    So by running npm run deploy, vite created a 'dist' folder for the production. 
    But "deploy": "gh-pages -d build" is watching for the build folder. 
    Now gh-pages will look for dist folder before deployment.
