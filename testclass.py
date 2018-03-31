from src.meshine_project.WebMetaDataGenerator.WebMetaDataGenerator import WebMetaDataGenerator
webMetaDataGenerator = WebMetaDataGenerator('https://groups.google.com/forum/#!topic/fr.misc.droit/fl3W_WTDMy8')
#webMetaDataGenerator.generate_tags()
webMetaDataGenerator.tags_from_newspaper()