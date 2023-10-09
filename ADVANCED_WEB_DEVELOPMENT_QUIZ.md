(1) Put the scripts in the right order of execution
- a. <script async src="async1.js" />            // Loads in 300ms
- b. <script defer src="defer1.js" />            // Loads in 200ms
- c. <script defer src="defer2.js" />            // Loads in 300ms
- d. <script async src="async2.js" />            // Loads in 50ms
- e. <script async defer src="asyncdefer1.js" /> // Loads in 60ms

My response
  1. d - reason is because async should render faster than defer
  2. a
  3. e - async defer should go first because loads in 60ms
  4. b
  5. c

Correct response
  1. d
  2. e
  3. a
  4. b
  5. c

### **Explanation**
**[regular script without async or defer (eg.: <script src="...">)]**

When the script tag is discovered be the HTML parser, it 
- stops the parsing
- fetches the script from wherever you've loading it
- and once it's downloaded, it executes the scripts, also on the main thread
- and then continues parsing the HTML
- this is called RENDER BLOCKING (the parser has to literally stop, fetch the script and execute it)
- this is not great when we care about showing something to the user really fast.

**[using the async attribute to avoid the RENDER BLOCKING]**
- When a script tag is discovered, it still fetches the script
- But in the meantime it can still just continue parsing the HTML
- Once is downloaded, the script still gets executed on the **main thread** once it's ready.
- In the case, the parser still has to "kind of" stop parsing, execute the scripts, and continue parsing
- For async, there's not guarantee of execution.
- Scripts just gets executed as soon as they've been downloaded.

**[using the defer attribute to avoid the RENDER BLOCKING]**
- When a script tag is discovered, it still fetches the script
- But the script only gets executed once the HTML has completed parsing.
- Only at the very end when the DOM is already complete.
- Good thing about defer is that you can guarantee the order of execution.
- This is a better alternative for scripts that rely on each other
- Where there shouldn't be render blocking.

![image](https://github.com/gglee89/giwoolee.com/assets/16644017/f42f5b64-5e69-49da-aa94-d9e8ebc98e4d)
source: frontend masters

(2) Which statements are true? (topic: Rendering pipeline)
- a. The render tree contains all elements from the DOM and CSSOM combined.
- b. Compositing is the process of separating layers based on z-index, which are then combined to form the final image displayed on the screen.
- c. The layout process assigns colors and images to the visual elements in the render tree.
- d. The compositing process happens on the compositor thread.
- e. Elements that aren't visible on the page, for example `display: hidden`, aren't part of the DOM tree.

My answers:
- a. Not sure ⚠️
- b. Not sure ⚠️
- c. Not sure ⚠️
- d. Not sure ⚠️
- e. false ❌ reason is because `display: hidden` still renders the element on the DOM, it just doesn't display it, which is different from `display: none`

Correct answers:
- a. false ❌ 
    - It's not for all the elements, but only the VISUAL ELEMENTS.
    - For example: `<head> elements` and `display: hidden` won't be included.
- b. false ❌
- c. false ❌
- d. true ✔️
- e. false ❌
  e. false ❌
