<?php 
namespace Practice\ecomm\Block;

use Magento\Framework\View\Element\Template;
use Magento\Catalog\Model\ResourceModel\Product\CollectionFactory;

class ProductList extends Template
{
    protected $productCollectionFactory;

    protected $_productFactory;
    public function __construct(
        \Magento\Catalog\Model\ProductFactory $productFactory,
        Template\Context $context,
        CollectionFactory $productCollectionFactory,
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->productCollectionFactory = $productCollectionFactory;
        $this->_productFactory = $productFactory;
    }

    public function getProductCollection()
    {
        $collection = $this->productCollectionFactory->create();
        $collection->addAttributeToSelect('*');
        $collection->setPageSize(5); 
        return $collection;
    }

    public function abc($id) {
        $product = $this->_productFactory->create()->load($id);
        
        // check sp co k
        if ($product->getId()) {
            return $product;
        } else {
            return null;
        }
    }
}
?>