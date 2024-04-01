```js
// hooks.ts
// getting rid of the useEffect will remove complexity and unnecessary renders

export function useGetOrCreateProduct() {
    const [product, setProduct] = (useState < Product) | (null > null)

    const {
        mutate: createWidget,
        data: newWidget,
        reset: resetCreateWidget,
    } = usePostWidget()
    const {
        mutate: createGadget,
        data: newGadget,
        reset: resetCreateGadget,
    } = usePostGadget()

    useEffect(() => {
        if (newWidget) {
            setProduct(newWidget)
            resetCreateWidget()
        }

        if (newGadget) {
            setProduct(newGadget)
            resetCreateGadget()
        }
    }, [newWidget, newGadget])

    return {
      mutate: (id: Widget["id] | Gadget["id"]) => {
        if (isWidget(id)) {
          createWidget({ id });
        } else {
          createGadget({ id });
        }
      },
      data: product
    }
}
```
