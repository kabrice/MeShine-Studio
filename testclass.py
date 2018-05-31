from src.meshine_project.meshine_api.WebMetaDataGenerator.WebMetaDataGenerator_dev import WebMetaDataGenerator
webMetaDataGenerator = WebMetaDataGenerator('https://www.presse-citron.net/comment-reveiller-creativite-innover-lab-postal-2018/')
webMetaDataGenerator.generate_tags()
#webMetaDataGenerator.tags_from_newspaper()