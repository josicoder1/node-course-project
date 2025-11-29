exports.pageNot=(req, res, next) => {
  res.status(404).render('pageNotFound', { 
    pageTitle: 'Page Not Found',
    path: '/404'     // or just '' 
  });
}