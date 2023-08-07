export default function Comments() {
    return (
        <div>
            <form className={classes.form} onSubmit={addProductHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" ref={priceRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="discountPercentage">discountPercentage</label>
          <input type="number" id="discountPercentage" ref={discountPercentagenRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="rating">rating</label>
          <input type="number" id="rating" ref={ratingRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="stock">stock</label>
          <input type="number" id="stock" ref={stockRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="brand">brand</label>
          <input type="text" id="brand" ref={brandRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="category">category</label>
          <input type="text" id="category" ref={categoryRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="images">images</label>
          <input type="text" id="images" ref={imagesRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="5" ref={descriptionRef}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid title and price</p>}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
        </div>
    )
}